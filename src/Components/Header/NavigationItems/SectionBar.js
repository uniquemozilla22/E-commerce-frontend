import React from 'react'
import {Link} from 'react-router-dom'

const SectionBar = () => {
    return (
        <>
            <div class=" container nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab black-text"><Link href="#test1 ">Test 1</Link></li>
        <li class="tab black-text"><Link class="active" href="#test2">Test 2</Link></li>
        <li class="tab black-text"><Link href="#test4">Test 4</Link></li>
      </ul>
            </div>
        </>
    )
}

export default SectionBar
