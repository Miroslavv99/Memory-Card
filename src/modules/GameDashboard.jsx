export function GameDashboard({ score, bestScore }) {
  return (
    <div className="dashboard">
      <div className="score-container">
        {" "}
        <div className="score">
          <span>Score: {score}</span>
          <span>Best Score: {bestScore}</span>
        </div>
      </div>
    </div>
  );
}
