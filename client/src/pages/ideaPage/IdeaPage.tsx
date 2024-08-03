import IdeaForm from "../../components/IdeaForm/IdeaForm";

const IdeaPage = () => {
  return (
    <div>
      <IdeaForm />
      <footer style={{ textAlign: "center" }}>
        &#169; {new Date(Date.now()).getFullYear()} Anurag Sharma
      </footer>
    </div>
  );
};

export default IdeaPage;
