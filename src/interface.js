
/**
 * An automatically generated file, based on interface.html.
 * An interesting problem in web development is managing HTML
 * code in JS files. Rather than embedding string literals and
 * concatenating them, or some other hackish soluion,
 * we simply convert an HTML file to a JS string. Therefore,
 * relevant edits should be in interface.html instead.
 *
 * The BlockPyInterface global can be seen as a constant
 * representation of the default interface.
 */
BlockPyInterface = "<div class='blockpy-content container-fluid' style='background-color :#fcf8e3; border: 1px solid #faebcc; '>    <div class='blockpy-popup modal fade' style='display:none'>        <div class='modal-dialog' style='width:750px'>            <div class='modal-content' id='modal-message' >                <div class='modal-header'>                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>                    <h4 class='modal-title'>Dynamic Content</h4>                </div>                <div class='modal-body' style='width:100%; height:400px; white-space:pre-wrap'>                </div>                <div class='modal-footer'>                    <button type='button' class='btn btn-white' data-dismiss='modal'>Close</button>                </div>                </div>        </div>    </div>    <canvas id='capture-canvas' style='display:none'></canvas>    <div class='row blockpy-top-row' style='padding-bottom: 10px; border-bottom: 1px solid #faebcc; '>        <div class='blockpy-content-top col-md-9 col-sm-9'>            <span class='blockpy-alert pull-right text-muted' data-bind=\"visible: false, text: status.text\"></span>            <strong>BlockPy: </strong>             <span class='blockpy-presentation-name'                  data-bind='text: assignment.name'></span>            <div class='blockpy-presentation' data-bind=\"html: assignment.introduction\">            </div>        </div>        <div class='blockpy-content-topright col-md-3 col-sm-3'>            <span class='text-muted' data-bind=\"visible: status.dataset_loading().length\">Loading Dataset!</span>            <span class='pull-right label label-default blockpy-status-box'                  data-bind=\"css: status_server_class()[0],                             text: status_server_class()[1],                             attr: { 'data-original-title': status.server_error }\"                  data-toggle=\"tooltip\" data-placement=\"left\">Loading</span>            <br>            <button type='button' class='btn btn-default btn-xs pull-right'                    data-bind=\"css: {active: settings.show_settings},                               click: showHideSettings\"                    >                <span class='glyphicon glyphicon-wrench'></span>            </button>            <div class='pull-right' data-bind=\"visible: settings.show_settings\">                Disable Semantic Errors: <input type='checkbox' data-bind=\"checked: settings.disable_semantic_errors\"><br>                Disable Timeout: <input type='checkbox' data-bind=\"checked: settings.disable_timeout\"><br>                Disable Typed Blocks: <input type='checkbox' data-bind=\"checked: settings.disable_variable_types\"><br>                                <label class='blockpy-toolbar-auto-upload' data-bind=\"visible: settings.instructor\">                Auto-save:                <input type='checkbox' data-bind=\"checked:settings.auto_upload\"><br>                </label>                                <label class='blockpy-toolbar-instructor-mode' data-bind=\"visible: settings.instructor_initial\">                Instructor mode:                 <input type='checkbox' data-bind=\"checked:settings.instructor\"><br>                </label>            </div>            <!--<img src=\"images/corgi.png\" class='img-responsive' />-->        </div>    </div>    <div class='row blockpy-middle-row' style=''>        <div class='blockpy-content-left col-md-6 col-sm-6'             style='padding:10px'>            <strong>Printer</strong>            <div class='blockpy-printer blockpy-printer-default'>            </div>        </div>        <div class='blockpy-content-right col-md-6 col-sm-6 bubble'             style='padding:10px'>            <div class='blockpy-feedback'>                <button type='button' class='btn btn-sm btn-default blockpy-feedback-trace pull-right'                         data-bind=\"visible: !execution.show_trace() && (status.error() == 'feedback' || status.error() == 'no errors'|| status.error() == 'complete')\">                    <span class='glyphicon glyphicon-circle-arrow-down'></span> Trace Variables                </button>                                <strong>Feedback: </strong>                <span class='label blockpy-feedback-status' data-bind=\"css: status_feedback_class()[0], text: status_feedback_class()[1]\">Runtime Error</span>                <br>                <pre class='blockpy-feedback-original'></pre>                <strong class='blockpy-feedback-title'></strong>                <div class='blockpy-feedback-body'><i>Run your code to get feedback.</i></div>                <div class='blockpy-code-trace'></div>                                <!-- ko if: execution.show_trace -->                <div class=\"blockpy-feedback-traces\">                                <div>                    <button type='button' class='btn btn-default' data-bind=\"click: moveTraceFirst\">                        <span class='glyphicon glyphicon-step-backward'></span>                    </button>                    <button type='button' class='btn btn-default' data-bind=\"click: moveTraceBackward\">                        <span class='glyphicon glyphicon-backward'></span>                    </button>                    Step <span data-bind='text: execution.trace_step()'></span>                    / <span data-bind='text: execution.last_step()-1'></span>                    (<span data-bind='text: current_trace().line == -1 ? \"The end\" : \"Line \"+current_trace().line'></span>)                    <button type='button' class='btn btn-default' data-bind=\"click: moveTraceForward\">                        <span class='glyphicon glyphicon-forward'></span>                    </button>                    <button type='button' class='btn btn-default' data-bind=\"click: moveTraceLast\">                        <span class='glyphicon glyphicon-step-forward'></span>                    </button>                </div>                                <table class='table table-condensed table-striped table-bordered table-hover'>                    <thead>                        <tr><th>Name</th><th>Type</th><th>Value</th></tr>                    </thead>                    <tbody data-bind=\"foreach: current_trace().properties\">                        <tr data-bind=\"visible: name != '__file__' && name != '__path__'\">                            <td data-bind=\"text: name\"></td>                            <td data-bind=\"text: type\"></td>                            <td>                                <code data-bind=\"text: value\"></code>                                <!-- ko if: type == \"List\" -->                                <a href=\"\" data-bind=\"click: $root.viewExactValue(type, exact_value)\">                                <span class='glyphicon glyphicon-new-window'></span>                                </a>                                <!-- /ko -->                            </td>                        </tr>                    </tbody>                </table>                                </div>                <!-- /ko -->                            </div>        </div>    </div>    <div class=\"row blockpy-toolbar-row\"         style='background-color :#fcf8e3; padding-bottom: 10px; border: 1px solid #faebcc'>        <div class='col-md-12 col-sm-12 blockpy-toolbar btn-toolbar' role='toolbar'>                        <button type='button' class='btn blockpy-run' style='float:left',                data-bind='css: execution.status() == \"running\" ? \"btn-info\" :                                execution.status() == \"error\" ? \"btn-danger\" : \"btn-success\" ' >                <span class='glyphicon glyphicon-play'></span> Run            </button>                        <div class=\"btn-group\" data-toggle=\"buttons\" data-bind=\"visible: !assignment.upload()\">                <label class=\"btn btn-default blockpy-mode-set-blocks\"                        data-bind=\"css: {active: settings.editor() == 'Blocks'}\">                    <span class='glyphicon glyphicon-th-large'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\" checked> Blocks                </label>                <label class=\"btn btn-default blockpy-mode-set-instructor\"                       data-bind=\"visible: settings.instructor,                                  css: {active: settings.editor() == 'Upload'}\">                    <span class='glyphicon glyphicon-list-alt'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\"> Instructor                </label>                <label class=\"btn btn-default blockpy-mode-set-split\"                       data-bind=\"css: {active: settings.editor() == 'Split'}\">                    <span class='glyphicon glyphicon-resize-horizontal'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\"> Split                </label>                <label class=\"btn btn-default blockpy-mode-set-text\"                        data-bind=\"css: {active: settings.editor() == 'Text'}\">                    <span class='glyphicon glyphicon-pencil'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\"> Text                </label>            </div>            <button type='button' class='btn btn-default blockpy-toolbar-reset' data-bind=\"visible: !assignment.upload()\">                <span class='glyphicon glyphicon-refresh'></span> Reset            </button>            <!--<button type='button' class='btn btn-default blockpy-toolbar-capture'>                <span class='glyphicon glyphicon-picture'></span> Capture            </button>-->            <button type='button' class='btn btn-default blockpy-toolbar-import' data-bind=\"visible: !assignment.upload() && (assignment.importable() || settings.instructor())\">                <span class='glyphicon glyphicon-cloud-download'></span> Import Datasets            </button>            <label class=\"btn btn-default btn-file\">                Upload <input class=\"blockpy-toolbar-upload\" type=\"file\" style=\"display: none;\">            </label>            <button type='button' class='btn btn-default blockpy-toolbar-history' data-bind=\"visible: !assignment.upload() && (assignment.importable() || settings.instructor())\">                <span class='glyphicon glyphicon-hourglass'></span> History            </button>            <!--            <button type='button' class='btn btn-default blockpy-toolbar-english'>                <span class='glyphicon glyphicon-list-alt'></span> English            </button>            -->                        <select data-bind=\"visible: settings.instructor() & !assignment.upload(), value: settings.filename\"                    class=\"blockpy-toolbar-filename-picker\">                <option value='__main__' selected>Student Code</option>                <option value='starting_code'>Starting Code</option>                <option value='give_feedback'>Generate Feedback</option>            </select>                        </div>    </div>    <div class='row blockpy-content-bottom'         style='padding-bottom: 10px; border: 1px solid #faebcc'>        <div class='blockpy-editor col-md-12 col-sm-12'>            <div class='blockpy-blocks blockpy-editor-menu'                  style='height:100%'>                <div class='blockly-div' style='height:450px; width: 100%' '></div>                <!-- <div class='blockly-area'></div> -->            </div>            <div class='blockpy-text blockpy-editor-menu' style='height: 450px'>                <div class='blockpy-text-sidebar' style='width:150px; height: 100%; float:left; background-color: #ddd'>                <!--                <button type='button' class='btn btn-default blockpy-text-insert-if'>Decision (If)</button>                <button type='button' class='btn btn-default blockpy-text-insert-if-else'>Decision (If/Else)</button>                -->                </div>                <textarea class='codemirror-div language-python'                           style='height:100%'></textarea>            </div>            <div class='blockpy-instructor blockpy-editor-menu form-inline'>                <!-- Name -->                <br>                <form class=\"form-inline\" style='display:inline-block'>                <label>Name:</label>                <input type='text' class='blockpy-presentation-name-editor form-control'                       data-bind='textInput: assignment.name'>                 </form>                <br>                <br>                                <label>Introduction:</label>                <div class='blockpy-presentation-body-editor'>                 </div>                                <!-- Parsons -->                <label class='blockpy-presentation-parsons-check'>                Parsons:                <input type='checkbox' class='form-control' data-bind=\"checked:assignment.parsons\">                </label>                 <br>                                <!-- Importable Datasets -->                <label class='blockpy-presentation-importable-check'>                Able to import datasets:                <input type='checkbox' class='form-control' data-bind=\"checked:assignment.importable\">                </label>                 <br>                                <!-- Algorithm Errors -->                <label class='blockpy-presentation-importable-check'>                Disable Algorithm Errors:                <input type='checkbox' class='form-control' data-bind=\"checked:assignment.disable_algorithm_errors\">                </label>                 <br>                                <!-- Initial mode -->                <label class='blockpy-presentation-text-first'>                Initial View:                <select data-bind=\"value: assignment.initial_view\">                    <option value=\"Blocks\" selected>Blocks</option>                    <option value=\"Text\">Text</option>                    <option value=\"Instructor\">Instructor</option>                    <option value=\"Upload\">Upload</option>                </select>                </label>                <br>                                <label>Available Modules</lable>                <select class='blockpy-available-modules' multiple='multiple'                        data-bind=\"selectedOptions: assignment.modules\">                    <option>Properties</option>                    <option>Decisions</option>                    <option>Iteration</option>                    <option>Functions</option>                    <option>Calculation</option>                    <option>Output</option>                    <option>Turtles</option>                    <option>Python</option>                    <option>Values</option>                    <option>Lists</option>                    <option>Dictionaries</option>                    <option>Data - Parking</option>                            </div>            <div class='blockpy-upload blockpy-editor-menu'>            </div>        </div>    </div>    <div>        <div class='blockpy-content-right col-md-5 col-sm-5 alert alert-info'>            <div class='panel panel-default'>                <div class='panel-heading'>Data Explorer</div>                <div class='panel-body'>                <div class='blockpy-explorer'>                    <table><tr>                    <!-- Step: X of Y (Line: Z) -->                    <td colspan='4'>                        <div class='blockpy-explorer-run-hide'>                            <i>Run your code to explore it.</i>                        </div>                        <div class='blockpy-explorer-status'>                            <strong>Step: </strong>                            <span class='blockpy-explorer-step-span'>0</span> of                             <span class='blockpy-explorer-length-span'>0</span>                             (<strong>Line: </strong>                            <span class='blockpy-explorer-line-span'>0</span>)                        </div>                    </td>                    </tr><tr>                    <!-- First Previous Next Last -->                    <td style='width:25%'>                        <button type='button' class='btn btn-default blockpy-explorer-first'>                        <span class='glyphicon glyphicon-fast-backward'></span> First</button>                    </td><td style='width:25%'>                        <button type='button' class='btn btn-default blockpy-explorer-back'>                        <span class='glyphicon glyphicon-backward'></span> Back</button>                    </td><td style='width:25%'>                        <button type='button' class='btn btn-default blockpy-explorer-next'>                        Next <span class='glyphicon glyphicon-forward'></span></button>                    </td><td style='width:25%'>                        <button type='button' class='btn btn-default blockpy-explorer-last'>                        Last <span class='glyphicon glyphicon-fast-forward'></span> </button>                    </td>                    </tr></table>                    <!-- Printer -->                                        <!-- Modules -->                    <br><div>                        <strong>Loaded Modules: </strong>                        <i class='blockpy-explorer-modules'>None</i>                    </div>                    <!-- Actual Trace data -->                    <br><strong>Trace Table</strong>                    <br><table style='width: 100%'                            class='table table-condensed table-striped                                    table-bordered table-hover blockpy-explorer-table'>                        <!-- Property Type Value -->                        <tr>                            <th>Property</th>                            <th>Type</th>                            <th>Value</th>                        </tr>                    </table>                </div>                </div>            </div>        </div>    </div></div><!--<div class='blockpy-explorer-errors alert alert-danger alert-dismissible' role='alert'>                     <button type='button' class='blockpy-explorer-errors-hide close' aria-label='Close'><span  aria-hidden='true'>&times;</span></button>                     <div class='blockpy-explorer-errors-body'>                                     </div>-->";
