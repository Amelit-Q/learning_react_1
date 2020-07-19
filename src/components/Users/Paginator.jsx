import React from 'react'
import classes from './Users.module.css'


let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}
                    onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
            })}
        </div>
    </div>

}

export default Paginator