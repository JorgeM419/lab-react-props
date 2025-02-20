const Progress = (props) => {
  const { donations } = props;
  let sum = 0;
  donations.map((el) => {
    sum += el.amount;
  });
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary"> ${sum} </span> of{" "}
        <span className="secondary"> $1000</span>
      </h2>
    </section>
  );
};

export default Progress;