import React, {useState} from 'react';
import HookMouseWithUseEffectCleanup from "./HookMouseWithUseEffectCleanup";

function MouseContainer()
{
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display &&  <HookMouseWithUseEffectCleanup/>}
        </div>
    );
}

export default MouseContainer;
