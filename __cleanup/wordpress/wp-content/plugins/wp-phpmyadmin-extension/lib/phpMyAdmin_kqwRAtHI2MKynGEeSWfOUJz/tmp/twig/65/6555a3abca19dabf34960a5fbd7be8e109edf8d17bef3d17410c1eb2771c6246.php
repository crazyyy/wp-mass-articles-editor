<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* login/header.twig */
class __TwigTemplate_e9337ce5cd3abb44d96204f9fa937a75249cac48853a307798810c4546563b77 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        if ((($context["session_expired"] ?? null) == true)) {
            // line 2
            echo "    <div id=\"modalOverlay\">
";
        }
        // line 4
        echo "<div class=\"container";
        echo twig_escape_filter($this->env, ($context["add_class"] ?? null), "html", null, true);
        echo "\">
<a href=\"";
        // line 5
        echo twig_escape_filter($this->env, PhpMyAdmin\Core::linkURL("https://www.phpmyadmin.net/"), "html", null, true);
        echo "\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"logo\">
<img src=\"";
        // line 6
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["theme"] ?? null), "getImgPath", [0 => "logo_right.png", 1 => "pma_logo.png"], "method", false, false, false, 6), "html", null, true);
        echo "\" id=\"imLogo\" name=\"imLogo\" alt=\"phpMyAdmin\" border=\"0\">
</a>
<h1>";
        // line 8
        echo sprintf(_gettext("Welcome to %s"), "<bdo dir=\"ltr\" lang=\"en\">phpMyAdmin</bdo>");
        echo "</h1>

<noscript>
";
        // line 11
        echo call_user_func_array($this->env->getFilter('error')->getCallable(), [_gettext("Javascript must be enabled past this point!")]);
        echo "
</noscript>

<div class=\"hide\" id=\"js-https-mismatch\">
";
        // line 15
        echo call_user_func_array($this->env->getFilter('error')->getCallable(), [_gettext("There is a mismatch between HTTPS indicated on the server and client. This can lead to a non working phpMyAdmin or a security risk. Please fix your server configuration to indicate HTTPS properly.")]);
        echo "
</div>
";
    }

    public function getTemplateName()
    {
        return "login/header.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  70 => 15,  63 => 11,  57 => 8,  52 => 6,  48 => 5,  43 => 4,  39 => 2,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "login/header.twig", "/home/a0309152/domains/sexbook.net.ru/public_html/wp-content/plugins/wp-phpmyadmin-extension/lib/phpMyAdmin_kqwRAtHI2MKynGEeSWfOUJz/templates/login/header.twig");
    }
}
