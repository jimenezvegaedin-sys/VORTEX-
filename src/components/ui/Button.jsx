export default function Button({ as:Comp='button', variant='primary', className='', children, ...props }) {
  return <Comp className={`btn btn-${variant} ${className}`.trim()} {...props}>{children}</Comp>
}
