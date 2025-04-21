import { useRouter } from "next/router";
import ModuleView from "../../Components/ModuleView";

export default function ModulePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="module-container">
      <ModuleView moduleId={parseInt(id)} />
    </div>
  );
}
