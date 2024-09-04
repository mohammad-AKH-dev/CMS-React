import './ErrorBox.css'

export default function ErrorBox({message}) {
  return (
    <div className='cms-empty-error'>
      <h1>{message}</h1>
    </div>
  )
}
