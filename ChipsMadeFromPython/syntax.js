// Code Syntax Highlighting & Theming 

// Adapted from:
// https://github.com/jxnblk/mdx-deck/blob/master/packages/themes/syntax-highlighter.js
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// Available Styles:
// https://github.com/conorhastings/react-syntax-highlighter/blob/HEAD/AVAILABLE_STYLES_PRISM.MD
import { hopscotch as style } from 'react-syntax-highlighter/dist/styles/prism'

export const getLanguage = className => {
    const match = /language-(\w*)/.exec(className || 'language-javascript')
    let lang = 'javascript'
    if (match.length > 1) {
        lang = match[1]
    }
    return lang
}

export const pre = props => props.children

export const code = props => {
    const language = getLanguage(props.className)
    return <SyntaxHighlighter style={style} language={language} {...props} />
}

export default {
    components: {
        pre,
        code,
    },
}