angular.module("facs.templates").run(["$templateCache", function($templateCache) {$templateCache.put("main.html","<fa-app class=\"full-screen\">\n  <fa-surface fa-size=\"[undefined, undefined]\" fa-background-color=\"\'#cc3333\'\"></fa-surface>\n  <fa-modifier fa-origin=\"[.5, .5]\" fa-align=\"[.5, .1]\" fa-scale=\"\">\n    <fa-surface fa-size=\"[true, true]\" class=\"text-center\">\n      Welcome to Famo.us/Angular!\n      <br>\n      <select ng-change=\"switchDemo(demo)\" ng-model=\"demo\">\n        <option value=\"circles\">Circles</option>\n        <option value=\"prompt\">Prompt</option>\n      </select>\n    </fa-surface>\n  </fa-modifier>\n\n  <ng-include src=\"demoTemplate\"></ng-include>\n</fa-app>");
$templateCache.put("animations/_circles.html","<fa-modifier fa-origin=\"[.1, .5]\" fa-align=\"[.1, .3]\" ng-controller=\"CircleCtrl\">\n  <fa-modifier ng-repeat=\"circle in circles\"\n    fa-scale=\"circle.scale.get()\"\n    fa-translate=\"circle.translate.get()\">\n    <fa-surface fa-size=\"circleSize\" class=\"circle\">\n\n    </fa-surface>\n  </fa-modifier>\n</fa-modifier>");
$templateCache.put("animations/_prompt.html","<fa-modifier fa-origin=\"[.5, .5]\" fa-align=\"[.5, .5]\"\n  ng-controller=\"PromptCtrl\"\n  fa-translate=\"prompt.translate.get()\">\n  <fa-surface fa-size=\"[200, 200]\"\n    class=\"prompt\"\n    ng-click=\"close()\">\n    <h3>{{prompt.text}}</h3>\n  </fa-surface>\n</fa-modifier>");}]);