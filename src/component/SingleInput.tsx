/* eslint-disable react/jsx-props-no-spreading */
import React, {
  memo,
  useLayoutEffect,
  forwardRef,
  useImperativeHandle,
  useRef
} from 'react'
import usePrevious from '../hooks/usePrevious'

export interface SingleOTPInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean
}

export const SingleOTPInputComponent = forwardRef(
  (props: SingleOTPInputProps, ref: any) => {
    const { focus, autoFocus, ...rest } = props
    const inputRef = useRef<HTMLInputElement>(null)
    const prevFocus = usePrevious(!!focus)

    useImperativeHandle(
      ref,
      () => ({
        blur: () => {
          inputRef.current && inputRef.current.blur()
        }
      }),
      [ref]
    )
    useLayoutEffect(() => {
      if (inputRef.current) {
        if (focus && autoFocus) {
          inputRef.current.focus()
        }
        if (focus && autoFocus && focus !== prevFocus) {
          inputRef.current.focus()
          inputRef.current.select()
        }
      }
    }, [autoFocus, focus, prevFocus])

    return <input id='input' ref={inputRef} {...rest} />
  }
)

const SingleOTPInput = memo(SingleOTPInputComponent)
export default SingleOTPInput
