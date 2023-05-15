﻿/*
ImageGlass Project - Image viewer for Windows
Copyright (C) 2010 - 2023 DUONG DIEU PHAP
Project homepage: https://imageglass.org

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
using ImageGlass.Base;
using ImageGlass.Settings;
using ImageGlass.Settings.Properties;
using ImageGlass.UI;
using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.WinForms;

namespace ImageGlass;

public partial class WebForm : ThemedForm
{
    private bool _isNavigationCompleted = false;


    /// <summary>
    /// Gets, sets campaign for hyperlink url.
    /// </summary>
    protected string PageName { get; set; } = "unknown";


    /// <summary>
    /// Gets the <see cref="WebView2"/> instance.
    /// </summary>
    protected WebView2 Web2 => WebV;


    public WebForm()
    {
        InitializeComponent();

        WebV.CoreWebView2InitializationCompleted += Web2_CoreWebView2InitializationCompleted;
        WebV.NavigationCompleted += Web2_NavigationCompleted;
        WebV.WebMessageReceived += Web2_WebMessageReceived;

        ApplyTheme(Config.Theme.Settings.IsDarkMode);
    }



    // Protected / override methods
    #region Protected / override methods

    protected override void OnLoad(EventArgs e)
    {
        base.OnLoad(e);
        Config.UpdateFormIcon(this);

        _ = InitWebview2();
    }

    protected override void ApplyTheme(bool darkMode, BackdropStyle? style = null)
    {
        if (!EnableTransparent)
        {
            BackColor = Config.Theme.ColorPalatte.AppBg;
        }

        base.ApplyTheme(darkMode, style);
    }


    protected override void OnRequestUpdatingColorMode(SystemColorModeChangedEventArgs e)
    {
        base.OnRequestUpdatingColorMode(e);

        _ = SetWeb2ColorModeAsync();

        // apply theme to controls
        ApplyTheme(Config.Theme.Settings.IsDarkMode);
    }


    protected override void OnSystemAccentColorChanged(SystemAccentColorChangedEventArgs e)
    {
        base.OnSystemAccentColorChanged(e);

        _ = SetWeb2AccentColorAsync();
    }

    #endregion // Protected / override methods


    // Virtual methods
    #region Virtual methods

    /// <summary>
    /// Occurs when Web2 is ready.
    /// </summary>
    protected virtual void OnWeb2Ready()
    {

    }


    /// <summary>
    /// Occurs when Web2 sends a message to <see cref="WebForm"/>.
    /// </summary>
    /// <param name="name">The name of the message</param>
    /// <param name="data">The data of the message</param>
    protected virtual void OnWeb2MessageReceived(string name, string data)
    {

    }


    /// <summary>
    /// Loads html content to Web2.
    /// </summary>
    protected virtual string OnLoadingWebSource()
    {
        return string.Empty;
    }


    /// <summary>
    /// Provides variables to parse HTML templates.
    /// </summary>
    protected virtual IEnumerable<(string Variable, string Value)> OnWebTemplateParsing()
    {
        return Enumerable.Empty<(string, string)>();
    }


    /// <summary>
    /// Occurs when the WebView2 navigation is completed.
    /// </summary>
    protected virtual void OnWeb2NavigationCompleted()
    {

    }

    #endregion // Virtual methods


    // Private methods
    #region Private methods

    /// <summary>
    /// Initialize Webview2 control.
    /// </summary>
    private async Task InitWebview2()
    {
        var options = new CoreWebView2EnvironmentOptions
        {
            AdditionalBrowserArguments = "--disable-web-security --allow-file-access-from-files --allow-file-access",
        };

        try
        {
            var env = await CoreWebView2Environment.CreateAsync(
                userDataFolder: App.ConfigDir(PathType.Dir, "WebUIData"),
                options: options);

            await WebV.EnsureCoreWebView2Async(env);
        }
        catch (Exception ex)
        {
            Config.ShowError(this,
                description: ex.Source,
                title: Config.Language["_._Error"],
                heading: ex.Message,
                details: ex.ToString());

            Close();
        }
    }


    /// <summary>
    /// Sets accent color to Webview2 content.
    /// </summary>
    private async Task SetWeb2AccentColorAsync()
    {
        var accent = Config.Theme.ColorPalatte.Accent.WithBrightness(0.2f);
        var rgb = $"{accent.R} {accent.G} {accent.B}";

        await WebV.ExecuteScriptAsync($"""
            document.documentElement.style.setProperty('--Accent', '{rgb}');
            """);
    }


    /// <summary>
    /// Sets color mode for Webview2 content.
    /// </summary>
    private async Task SetWeb2ColorModeAsync()
    {
        var colorMode = Config.Theme.Settings.IsDarkMode ? "dark" : "light";

        await WebV.ExecuteScriptAsync($"""
            document.documentElement.setAttribute('color-mode', '{colorMode}');
            """);
    }


    /// <summary>
    /// Starts listening to keydown event
    /// </summary>
    /// <returns></returns>
    private async Task StartListeningToKeyDownEventAsync()
    {
        await WebV.ExecuteScriptAsync("""
            window.onkeydown = (e) => {
                console.log("ListentoKeyDownEvents", e);
                window.chrome.webview?.postMessage({ Name: 'KeyDown', Data: e.key });
            }
        """);
    }

    #endregion // Private methods


    // Webview2 events
    #region Webview2 events

    private void Web2_CoreWebView2InitializationCompleted(object? sender, CoreWebView2InitializationCompletedEventArgs e)
    {
        WebV.DefaultBackgroundColor = Color.Transparent;
        if (WebV.CoreWebView2 == null) return;

        WebV.CoreWebView2.Settings.IsZoomControlEnabled = false;
        WebV.CoreWebView2.Settings.IsStatusBarEnabled = false;
        WebV.CoreWebView2.Settings.IsBuiltInErrorPageEnabled = false;
        WebV.CoreWebView2.Settings.IsGeneralAutofillEnabled = false;
        WebV.CoreWebView2.Settings.IsPasswordAutosaveEnabled = false;
        WebV.CoreWebView2.Settings.IsPinchZoomEnabled = false;
        WebV.CoreWebView2.Settings.IsSwipeNavigationEnabled = false;
        WebV.CoreWebView2.Settings.AreDefaultScriptDialogsEnabled = false;
        WebV.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
        WebV.CoreWebView2.Settings.AreBrowserAcceleratorKeysEnabled = false;

        WebV.CoreWebView2.Settings.AreDevToolsEnabled = false;
#if DEBUG
        WebV.CoreWebView2.Settings.AreDevToolsEnabled = true;
#endif

        WebV.CoreWebView2.NewWindowRequested += CoreWebView2_NewWindowRequested;

        OnWeb2Ready();
    }


    private void Web2_NavigationCompleted(object? sender, CoreWebView2NavigationCompletedEventArgs e)
    {
        _isNavigationCompleted = true;

        _ = SetWeb2ColorModeAsync();
        _ = SetWeb2AccentColorAsync();
        _ = StartListeningToKeyDownEventAsync();

        OnWeb2NavigationCompleted();
    }


    private void CoreWebView2_NewWindowRequested(object? sender, CoreWebView2NewWindowRequestedEventArgs e)
    {
        e.Handled = true;
        BHelper.OpenUrl(e.Uri, $"app_{PageName}");
    }


    private void Web2_WebMessageReceived(object? sender, CoreWebView2WebMessageReceivedEventArgs e)
    {
        var msg = BHelper.ParseJson<WebMessageModel>(e.WebMessageAsJson);
        if (msg.Name == "KeyDown")
        {
            if (msg.Data == "Escape")
            {
                Close();
            }
#if DEBUG
            else if (msg.Data == "F12")
            {
                WebV.CoreWebView2.OpenDevToolsWindow();
            }
#endif
        }

        OnWeb2MessageReceived(msg.Name, msg.Data ?? string.Empty);
    }

    #endregion // Webview2 events


    /// <summary>
    /// Reloads Web2 content.
    /// </summary>
    public async Task LoadWeb2ContentAsync(string html)
    {
        _isNavigationCompleted = false;

        var templates = new List<(string, string)>()
        {
            ("{{styles.css}}", Resources.Styles),
            ("{{body.html}}", html),
            ("{{PageName}}", PageName),
        };
        templates.AddRange(OnWebTemplateParsing());

        var pageHtml = Resources.Layout.ReplaceMultiple(templates);
        WebV.CoreWebView2.NavigateToString(pageHtml);

        // wait for the navigation completed
        while (!_isNavigationCompleted)
        {
            await Task.Delay(100);
        }
    }

}
