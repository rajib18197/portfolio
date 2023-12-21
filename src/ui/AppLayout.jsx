import { Outlet, useParams } from "react-router-dom";
import MainNav from "./MainNav";
import PageContainer from "./PageContainer";

export default function AppLayout() {
  const { id } = useParams();
  const scrollcontainer = id ? "true" : "";

  return (
    <PageContainer scrollcontainer={scrollcontainer}>
      <MainNav />

      <Outlet />
    </PageContainer>
  );
}
