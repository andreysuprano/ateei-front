interface ButtonProps {
  text: string;
  color: string;
  action: () => void
}

export default function Button (button:ButtonProps) {
  return (
    <div className="w-full">
      <button type="submit"
        className={`cursor-pointer rounded-md  px-4 py-2 text-sm font-semibold text-white w-full mt-8 ${button.color}`}
        onClick={button.action}>
        {button.text}
        </button>
    </div>
  )
}
