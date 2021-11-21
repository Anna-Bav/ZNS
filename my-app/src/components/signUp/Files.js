import React from "react";
import './Files.css'



export default function Files(){
    return(
        <div className='files'>
            <div className='files_choose'>
                <div className='plus_file'>+Add file</div>
                <div className='files_nav'>
                    <div>All</div>
                    <div>Docs</div>
                    <div>Photo</div>
                    <div>Audio</div>
                    <div>Links</div>
                    <div>Other</div>
                </div>
            </div>
            <div className='all_nav'>
                <div>Name</div>
                <div>Owner</div>
                <div>Last modified</div>
            </div>

            <div className='document'>
                <div className='doc_img'>
                <img src='/images/Excel.svg'/>
                <div>
                    <div className='doc_text'>Document 2.xls</div> 
                    <div className='doc_size'>16.5 MB</div>
                </div>
                </div>
                <div className='me'>Me</div>
                <div className='me_date'>22/09/2021 Me</div>
            </div>

            <div className='document'>
                <div className='doc_img'>
                <img src='/images/Excel.svg'/>
                <div>
                <div className='doc_text'>Document 1.xls</div>
                <div className='doc_size'>16.5 MB</div>
            </div>
            </div>
                <div className='me'>Me</div>
                <div className='me_date'>22/09/2021 Me</div>
            </div>

            <div className='document'>
                <div className='doc_img'>
                <img src='/images/word.svg'/>
                <div>
                <div className='doc_text'>Document 2.doc</div>
                <div className='doc_size'>16.5 MB</div>
                </div>
            </div>
            <div className='me'>Sara Londre</div>
                <div className='me_date'>22/09/2021 Sara Londre</div>
            
            </div>
           
        </div>
    )
}