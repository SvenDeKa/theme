<?php
namespace Svendeka\Theme\ViewHelpers;;

use TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;
use TYPO3Fluid\Fluid\Core\ViewHelper\Traits\CompileWithRenderStatic;

/**
 * Class TestViewHelper
 */
class TestViewHelper extends AbstractViewHelper
{
    use CompileWithRenderStatic;

    /*
     * since 8.7: viewhelpers use htmlspecialchars by default, fix this.
     */
    protected $escapeOutput = false;

    /**
     * Initializes the arguments for the ViewHelper
     */
    public function initializeArguments()
    {
    }

    /**
     * @param array $arguments
     * @param \Closure $renderChildrenClosure
     * @param RenderingContextInterface $renderingContext
     * @return string
     */
    public static function renderStatic(array $arguments, \Closure $renderChildrenClosure, RenderingContextInterface $renderingContext)
    {
        return '<p>Just a test: This Viewhelper is registered. thanks.</p>';
    }
}
