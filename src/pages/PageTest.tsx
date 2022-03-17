import React from 'react'
import SuperCheckbox from "../components/CheckBox/SuperCheckbox";
import SuperDoubleRange from "../components/DoubleRange/SuperDoubleRange";
import SuperEditableSpan from "../components/EditableSpan/SuperEditableSpan";
import SuperInputText from "../components/InputText/SuperInputText";
import SuperRadio from "../components/Radio/SuperRadio";
import SuperSelect from "../components/Select/SuperSelect";
import Button from "../components/Button/Button";

type propsPageTestType = {}


const PageTest = (props: propsPageTestType) => {
    return (
        <div>
            <Button name={'Test'}/>
            <SuperCheckbox/>
            <SuperDoubleRange/>
            <SuperEditableSpan/>
            <SuperInputText/>
            <SuperRadio/>
            <SuperSelect/>
        </div>
    )
}

export default PageTest