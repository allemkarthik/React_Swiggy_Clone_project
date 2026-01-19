const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4 ">contact page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        ></input>
        <button className="border border-black p-2 m-2 bg-gray-50 rounded-lg">
          submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
