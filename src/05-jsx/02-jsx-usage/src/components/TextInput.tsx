const TextInput: React.FunctionComponent = () => {
	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleClick = (): void => {
		if (inputRef.current) inputRef.currrent.focus();
	};

	return (
		<div>
			<input type="text" ref={inputRef} />
			<input type="button" value="Focus" onClick={handleClick}/>
		</div>
	);
};
