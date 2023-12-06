import React, { FC, useCallback, ReactElement, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

interface Props {
  text: string
  children: ReactElement
}

const CopyButton: FC<Props> = ({ text, children }) => {
  const [noticing, setNoticing]= useState(false)
  const copy = useCallback(() => setNoticing(true), [setNoticing])

  return (
      <CopyToClipboard text={text} onCopy={copy}>
        {children}
      </CopyToClipboard>
  )
}

export default CopyButton
