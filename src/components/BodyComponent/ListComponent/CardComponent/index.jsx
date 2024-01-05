import { Typography } from '@mui/material'
import React from 'react'

function CardComponent({ data }) {
    return (
        <div>
            {/* <img src={} alt="" /> */}
            <Typography >
                {data.modelo && <h2>{data.modelo}</h2>}
            </Typography>
            <Typography >
                {data.precio && <h2>{data.precio}</h2>}
            </Typography>
        </div>
    )
}

export default CardComponent