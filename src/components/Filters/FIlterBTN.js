import React from 'react'

const FIlterBTN = ({name, index, items, task, setPageNumber }) => {
  return (
    <div>
        <style jsx>
            {`
            .x:checked + label {
                background-color: #01DF74;
                color: withe;
            }
            input[type="radio"] {
                display: none
            }
            `}
        </style>
        <div className="form-check">
            <input
             onClick={() => {
                 setPageNumber(1);
                 task(items);
             }}
             className="form-check-input x"
             type="radio" 
             name={name}
             id={`${name}-${index}`}
             
            />
            <label
             class="btn btn-outline-success" 
             for={`${name}-${index}`}
            >
                {items}
            </label>
        </div>
        
    </div>


  )
}

export default FIlterBTN