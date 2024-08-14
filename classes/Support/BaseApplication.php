<?php

namespace WpDraftscripts\Support;

class BaseApplication
{
    public string $version = '1.0.0';
    public string $pluginURL;
    public string $pluginPath;
    public string $pluginBaseName;

    public function __construct()
    {
        $this->pluginURL = WP_DRAFTSCRIPTS_PLUGIN_URL;
        $this->pluginPath = WP_DRAFTSCRIPTS_PLUGIN_PATH;
        $this->pluginBaseName = WP_DRAFTSCRIPTS_PLUGIN_BASENAME;
    }

    public function view($view, $data = [])
    {
        if (file_exists($this->pluginPath . 'views/' . $view . '.php')) {
            extract($data);
            require_once $this->pluginPath . 'views/' . $view . '.php';
        }
    }
}
