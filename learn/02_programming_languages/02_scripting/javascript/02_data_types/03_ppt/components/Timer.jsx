function Timer({ startTime, isRunning }) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      <i className="fas fa-clock"></i>
      <span>{formatTime(elapsed)}</span>
    </div>
  );
}

window.Timer = Timer;
