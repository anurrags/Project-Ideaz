import IdeaForm from "../../components/IdeaForm/IdeaForm";

const IdeaPage = () => {
  return (
    <div>
      <IdeaForm />
      <footer style={{ textAlign: "center", margin: "5rem 0 2rem 0" }}>
        &#169; {new Date(Date.now()).getFullYear()} Anurag Sharma
      </footer>
    </div>
  );
};

export default IdeaPage;
