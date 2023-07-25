const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "hexo-butterfly-snippets-best" is now active!');
    
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((e) => {
        if (vscode.window.activeTextEditor.document.languageId == "markdown")
            if (e.contentChanges[0].text == ">")
                vscode.commands.executeCommand("editor.action.triggerSuggest");
    }))
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
