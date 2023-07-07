import React from 'react';
import './CSSPosition.css'

// To see this example on YouTube, search for "Learn CSS Position In 9 minutes" by Web Dev Simplified.

// STATIC POSITIONING
// position:static means the element is positioned according to the normal flow of the document.

// RELATIVE POSITIONING
// position: relative means the element is still positioned according to the normal flow of the document,
// but its position can then be offset relative to itself based on the values of top, right, bottom, and left.
// So if you set left:20px then the element will move 20px to the right from its normal position.
// It does not change the size of the element, it just moves it from its normal position so that it may overflow on the other side.

// ABSOLUTE POSITIONING
// position:absolute means the element is removed from the flow of the document and other elements will behave as if it's not even there.
// It is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block.
// If parent is left to default, then it is relative to the browser window otherwise if the parent is set to relative, then it is relative to the parent.
// Its final position is determined by the values of top, right, bottom, and left.

// FIXED POSITIONING
// position:fixed is basically the same as absolute except that it's relative to the browser window and not the parent element.
// It's positioned relative to the initial containing block established by the viewport,
// except when one of its ancestors has a transform, perspective,
// or filter property set to something other than none (see the CSS Transforms Spec),
// in which case that ancestor behaves as the containing block.
// Its final position is also determined by the values of top, right, bottom, and left.

// STICKY POSITIONING
// position:sticky is a hybrid of relative and fixed positioning.
// The element is treated as relative positioned until it crosses a specified threshold,
// at which point it is treated as fixed positioned. It's positioned relative to its nearest scrolling ancestor.
// Once it gets to the end of the scrolling ancestor (the parent or browser window), it "sticks" there and behaves like position:fixed.



function CSSPosition()
{
    return (
        <div className="parent">
            Parent
            <div className="child-one child">One</div>
            <div className="child-two child">Two</div>
            <div className="child-three child">Three</div>
        </div>

    );
}

export default CSSPosition;
