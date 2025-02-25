const DonationForm = (props) => {
  const { donations } = props;
  const next = donations.length + 1;
  return (
    <section className="donation">
      <h3>
        You could be donation <span className="secondar">#{next}!</span>
      </h3>
      <form>
        <label hmtlFor="name">
          name
          <input id="name" name="name" type="text" placeholder="Your name..." />
        </label>
        <label htmlFor="caption">
          <input
            id="caption"
            name="caption"
            type="text"
            placeholder="Add a brief message..."
          />
        </label>
        <label htmlFor="amount">
          <input id="amount" name="amount" type="number" placeholder="0" />
        </label>
        <button>Donate!</button>
      </form>
    </section>
  );
};

export default DonationForm;