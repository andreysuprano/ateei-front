

export default function ProgressBar (props:{percent:string}) {
  return (
    <>
      <div className="w-full bg-gray-200 h-1.5 mb-4 dark:bg-white rounded-md">
        <div className={`bg-primary-blue h-1.5 dark:bg-primary-blue rounded-md`}  style={{ width: `${props.percent}%` }}></div>
      </div>
    </>
  )
}
