/**
 * @param {*} target 
 * @param {*} searchId 
 * @returns The number of matches of searchstr found in target.
*/

function FindCount(target, searchId){
  const paragraph = document.getElementById(target).innerText
  const searchStr = document.getElementById(searchId).value
  const regex = new RegExp("" + searchStr + "", "g");
  return alert("There are " + paragraph.match(regex).length + " matches in the paragraph.")
}


/**
 * 
 * @param {*} target 
 * @param {*} findId 
 * @param {*} replacementId 
 * @returns Replaces all occurrences of find in target with replacement.
 */
function FindReplace(target, findId, replacementId){
    const paragraph = document.getElementById(target).innerText
    const findStr = document.getElementById(findId).value
    const replacementStr =  document.getElementById(replacementId).value
    const regex = new RegExp("" + findStr + "", "g","i");
    return alert(paragraph.replace(regex, replacementStr))
}

/**
 * 
 * @param {*} target 
 * @param {*} replacementId2 
 * @returns  Replaces all double occurrences of a word in the target with a single occurrence of the word.
 */
function ReplaceDouble(target, replacementId2) {
    const paragraph = document.getElementById(target).innerText
    const replacementStr =  document.getElementById(replacementId2).value
    const regex = new RegExp('\\b(' + replacementStr + ')\\b(?:\\s+\\1\\b)+', 'gi');  
    return alert("New paragraph after replace double: \n" + paragraph.replace(regex, replacementStr))
} 

/**
 * 
 * @param {*} target 
 * @returns Return new paragraph and makes the first character of every sentence a capital letter.
 */
function StartCap(target){
    const paragraph = document.getElementById(target).innerText
    const newParagraph =  paragraph.replace(/(^|\.\s+|\?\s+|\!\s+)([a-z])/g, function(match, p1, p2) {
        return p1 + p2.toUpperCase();
      });

    return alert("New paragraph after start cap: \n" + newParagraph)
}

/**
 * 
 * @param {*} target 
 * @param {*} replacementId 
 * @returns Find and replace text "name" with the replacement text.
 */
function FindAndReplaceName(target, replacementId){
    const paragraph = document.getElementById(target).innerText
    const replacementStr =  document.getElementById(replacementId).value
    const regex = new RegExp("name", "g","i");
    return alert(paragraph.replace(regex, replacementStr))
}
