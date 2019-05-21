import React from 'react'
import { render } from 'react-dom'
import { Template } from './template.mst'

document.addEventListener('DOMContentLoaded', () => {
    render(<Template />, document.getElementById('app'))
})