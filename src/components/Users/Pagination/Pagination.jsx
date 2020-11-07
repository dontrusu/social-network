import React from "react"
import s from "../Users.module.css"

const Pagination = props => {

    const { count, page, totalCount, onPageChange } = props

    const createPaginationItems = () => {
        const totalPages = Math.ceil(totalCount / count)
        let items = []
        for(let i=1; i <= totalPages; i++){
            items.push(
                <button 
                    key={i}
                    className={`${s.paginationItem} ${i === page ? s.selected : ""}`}
                    onClick={() => {onPageChange(i)}}
                >
                    {i}
                </button>
            )
        }
        return items
    }

    return(
        <div className={s.pagination}>
            {createPaginationItems()}
        </div>
    )
}

export default Pagination