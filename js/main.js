var currentSelectParent

$(document).click(function(event) {
	// store current selected element
    var currentSelectEl = $(event.target)

    // make sure currentSelectParent exists and the current selected element is a H2 or H2
    if(currentSelectEl[0].nodeName == 'H3' && typeof currentSelectParent != 'undefined') {
        // update previos parent to remove currentElement class
        currentSelectParent.className = 'ng-scope'
    } else if(currentSelectEl[0].nodeName == 'H2' && typeof currentSelectParent != 'undefined') {
        // update previos parent to remove currentElement class
        currentSelectParent.className = 'ng-scope'
    }


    // OPENS INDIVIDUAL DIVS
    // make sure the current selected element is an H2 or H3
    if(currentSelectEl[0].nodeName == 'H3') {
        // update currentSelectParent to the parent div 
        currentSelectParent = $(event.target).parent()[0]
        // update currentSelectParent class name to include currentElement
        currentSelectParent.className = 'ng-scope currentElement'
    } else if(currentSelectEl[0].nodeName == 'H2') {
        // update currentSelectParent to the parent div 
        currentSelectParent = $(event.target).parent()[0]
        // update currentSelectParent class name to include currentElement
        currentSelectParent.className = 'ng-scope currentElement'
    }

    // return currentEl value
    return currentSelectParent
})

