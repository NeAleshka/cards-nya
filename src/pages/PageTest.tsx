import React from 'react'
import SuperButton from "../components/Button/SuperButton";
import SuperCheckbox from "../components/CheckBox/SuperCheckbox";
import SuperDoubleRange from "../components/DoubleRange/SuperDoubleRange";
import SuperEditableSpan from "../components/EditableSpan/SuperEditableSpan";
import SuperInputText from "../components/InputText/SuperInputText";
import SuperRadio from "../components/Radio/SuperRadio";
import SuperSelect from "../components/Select/SuperSelect";

type propsPageTestType = {}


const PageTest = (props: propsPageTestType) => {
    return (
        <div>
            <SuperButton/>
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