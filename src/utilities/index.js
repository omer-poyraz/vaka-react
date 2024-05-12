import ProductPage from "../view/product";
import ProductEdit from "../view/productEdit";
import ProductManager from "../view/productEdit/productManager";
import RoomPage from "../view/room";
import RoomEdit from "../view/roomEdit";
import SaveStore from "../view/saveStore";
import StorePage from "../view/store";
import StoreEdit from "../view/storeEdit";
import StructurePage from "../view/structure";
import StructureEdit from "../view/structureEdit";
import UserPage from "../view/user";
import WorkOrderPage from "../view/workorder";

export default [
    null,
    <ProductPage />,
    <RoomPage />,
    <StorePage />,
    <StructurePage />,
    <WorkOrderPage />,
    <UserPage />,
    null,
    <ProductEdit />,
    <RoomEdit />,
    <StoreEdit />,
    <StructureEdit />,
    <ProductManager />,
    <SaveStore />
]