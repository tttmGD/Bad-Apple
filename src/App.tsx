import { useEffect, useState } from "react"

const App = () => {
	const [frame, setFrame] = useState(0)
	useEffect(() => {
		const interval = setInterval(() => {
			setFrame(frame + 1)
		}, 1000 / 60)
		return () => clearInterval(interval)
	}, [frame])
	return (
		<h1>{frame}</h1>
	)
}

export default App