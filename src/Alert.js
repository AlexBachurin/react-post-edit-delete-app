import React, { useEffect } from 'react'

export default function Alert({ alert, removeAlert, list }) {
    useEffect(() => {
        const alertId = setTimeout(() => {
            removeAlert()
        }, 3000)
        return () => {
            clearTimeout(alertId)
        }
    }, [list])
    return (
        <p className={`alert alert-${alert.type}`}>{alert.msg}</p>
    )
}
