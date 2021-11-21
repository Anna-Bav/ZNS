import React from "react";
import './Notes.css'



export default function Notes(){
    return(
        <div className='notes'>
            <div className='plus_note'>+ New note</div>
            <div className='note'>
                <div className='str_1'>Agree on the conditions<div className='str_1_author'>by Tomasz Kowalski</div></div>
                <div className='str_2'>22/09/2021</div>
                <div className='str_3'>Meeting on the checkout area. We talked about the upcoming meeting...</div>
            </div>
            <div className='note'>
                <div className='str_1'>Agree on the conditions<div className='str_1_author'>by Arlen McCoy</div></div>
                <div className='str_2'>13/09/2021</div>
                <div className='str_3'>We discussed all points about payment.</div>
            </div>
            <div className='note'>
                <div className='str_1'>The brief is completed, checked, a...<div className='str_1_author'>by Wade Warren</div></div>
                <div className='str_2'>01/09/2021</div>
                <div className='str_3'>The brief is completed, checked, a list of clarifying questions has been ...</div>
            </div>
            <div className='note'>
                <div className='str_1'>Agree on the conditions<div className='str_1_author'>by Sam Walt</div></div>
                <div className='str_2'>25/08/2021</div>
                <div className='str_3'>Request for order, waiting for details.</div>
            </div>
        </div>
    )
}