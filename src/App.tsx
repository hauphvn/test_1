import {Login} from "./features/auth/pages";
import {Admin} from "./components/layout";
import {EditUser} from "./components/layout/user/edit/EditUser";
import {EditMenuStore} from "./components/layout/store/menu/edit/EditMenuStore";
import {OptionMenu} from "./components/layout/store/menu/option/OptionMenu";
import {GroupTable} from "./components/layout/store/table/group_table/GroupTable";
import {Route, Routes} from "react-router-dom";
import {User} from "./components/layout/user/dashboard/User";
import {LeftSide} from "./components/common/LeftSide";
import {LandingRoute, LoginRoute, NotFound, PrivateRoute,} from "./components/common";
import {SystemManagement} from "./components/layout/system_management/SystemManagement";
import {StoreMenu} from "./components/layout/store/menu/StoreMenu";
import {StoreDetail} from "./components/layout/store/detail/StoreDetail";
import {TopBar} from "./components/common/TopBar";
import {StoreDashboard} from "./components/layout/store/StoreDashboard";
import {StoreEdit} from "./components/layout/store/edit/StoreEdit";
import {SettingCMC} from "./components/layout/setting_cmc/SettingCMC";
import {CmcUserEdit} from "./components/layout/cmc/user/edit/CmcUserEdit";
import {CmcUserDashboard} from "./components/layout/cmc/user/CmcUserDashboard";
import {StoreTableEdit} from "./components/layout/store/table/edit/StoreTableEdit";
import {StoreTable} from "./components/layout/store/table/StoreTable";
import {StoreType} from "./components/layout/store/type/StoreType";
import {StoreCategory} from "./components/layout/store/category/StoreCategory";
import {ImportData} from "./components/layout/data/import/ImportData";
import {StoreSetting} from "./components/layout/store/setting/StoreSetting";
import {NAVIGATION_PATH} from "./app/constant";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingRoute/>}/>
			<Route
				path="/login"
				element={
					<LoginRoute>
						<Login />
					</LoginRoute>
				}
			/>
			<Route
				path="/admin"
				element={
					<PrivateRoute>
						<TopBar />
						<LeftSide>
							<Admin />
						</LeftSide>
					</PrivateRoute>
				}
			/>
			<Route
				path={`${NAVIGATION_PATH.USER.INDEX}`}
				element={
					<PrivateRoute>
						<TopBar/>
						<LeftSide>
							<User/>
						</LeftSide>
					</PrivateRoute>
				}
			/>
			<Route
				path={`${NAVIGATION_PATH.USER.EDIT}`}
				element={
					<PrivateRoute>
						<TopBar/>
						<LeftSide>
							<EditUser/>
						</LeftSide>
					</PrivateRoute>
				}
			/>
			<Route path="/store"
						 element={
							 <PrivateRoute>
								 <TopBar/>
								 <LeftSide>
									 <StoreDashboard/>
								 </LeftSide>
							 </PrivateRoute>
						 }
			/>
			<Route path={`${NAVIGATION_PATH.STORE.EDIT}`}
						 element={
							 <PrivateRoute>
								 <TopBar/>
								 <LeftSide>
									 <StoreEdit/>
								 </LeftSide>
							 </PrivateRoute>
						 }
			/>
			<Route path={`${NAVIGATION_PATH.STORE.DETAIL_TABLE_EDIT}`}
						 element={
							 <PrivateRoute>
								 <TopBar/>
								 <LeftSide>
									 <StoreTableEdit/>
								 </LeftSide>
							 </PrivateRoute>
						 }
			/>
			<Route path={`${NAVIGATION_PATH.STORE.DETAIL_TABLE}`}
						 element={
							 <PrivateRoute>
								 <TopBar/>
								 <LeftSide>
									 <StoreTable/>
								 </LeftSide>
							 </PrivateRoute>
						 }
			/>
			<Route path={`${NAVIGATION_PATH.STORE.DETAIL_TYPE}`}
						 element={
							 <PrivateRoute>
								 <TopBar/>
								 <LeftSide>
									 <StoreType/>
								 </LeftSide>
							 </PrivateRoute>
						 }
			/>
			<Route path={`${NAVIGATION_PATH.STORE.DETAIL_CATEGORY}`}
						 element={
							 <PrivateRoute>
								 <TopBar/>
								 <LeftSide>
									 <StoreCategory/>
								 </LeftSide>
							 </PrivateRoute>
						 }
			/>
			<Route path={`${NAVIGATION_PATH.STORE.DETAIL_MENU}`}
						 element={
							 <PrivateRoute>
								 <TopBar/>
								 <LeftSide>
									 <StoreMenu/>
								 </LeftSide>
							 </PrivateRoute>
						 }
			/>
			<Route path={`${NAVIGATION_PATH.STORE.DETAIL_SETTING}`}
						 element={
							 <PrivateRoute>
								 <TopBar/>
								 <LeftSide>
									 <StoreSetting/>
								 </LeftSide>
							 </PrivateRoute>
						 }
			/>
			<Route path={`${NAVIGATION_PATH.STORE.DETAIL_OPTION_MENU}`}
						 element={
							 <PrivateRoute>
								 <TopBar/>
								 <LeftSide>
									 <OptionMenu/>
								 </LeftSide>
							 </PrivateRoute>
						 }
			/>
			<Route path={`${NAVIGATION_PATH.STORE.DETAIL_GROUP_TABLE}`}
						 element={
							 <PrivateRoute>
								 <TopBar/>
								 <LeftSide>
									 <GroupTable/>
								 </LeftSide>
							 </PrivateRoute>
						 }
			/>
			<Route path={`${NAVIGATION_PATH.STORE.MENU_STORE_EDIT}`}
						 element={
							 <PrivateRoute>
								 <TopBar/>
								 <LeftSide>
									 <EditMenuStore/>
								 </LeftSide>
							 </PrivateRoute>
						 }
			/>
			<Route path={`${NAVIGATION_PATH.STORE.DETAIL}`}
						 element={
							 <PrivateRoute>
								 <TopBar/>
								 <LeftSide>
									 <StoreDetail/>
								 </LeftSide>
							 </PrivateRoute>
						 }
			/>
			<Route
				path={`${NAVIGATION_PATH.SETTING_CMC.INDEX}`}
				element={
					<PrivateRoute>
						<TopBar/>
						<LeftSide>
							<SettingCMC/>
						</LeftSide>
					</PrivateRoute>
				}
			/>
			<Route
				path="/system-management"
				element={
					<PrivateRoute>
						<TopBar/>
						<LeftSide>
							<SystemManagement/>
						</LeftSide>
					</PrivateRoute>
				}/>
			<Route
				path={`${NAVIGATION_PATH.USER_CMC.INDEX}`}
				element={
					<PrivateRoute>
						<TopBar/>
						<LeftSide>
							<CmcUserDashboard/>
						</LeftSide>
					</PrivateRoute>
				}
			/>
			<Route
				path={`${NAVIGATION_PATH.USER_CMC.EDIT}`}
				element={
					<PrivateRoute>
						<LeftSide>
							<TopBar/>
							<CmcUserEdit/>
						</LeftSide>
					</PrivateRoute>
				} />
			<Route
				path={`${NAVIGATION_PATH.USER_CMC.ADD_NEW}`}
				element={
					<PrivateRoute>
						<LeftSide>
						<TopBar />
							<CmcUserEdit />
						</LeftSide>
					</PrivateRoute>
				} />
			<Route path="*" element={<NotFound />} />
			<Route
				path={`${NAVIGATION_PATH.STORE.DETAIL_IMPORT_DATA}`}
				element={
					<PrivateRoute>
						<TopBar/>
						<LeftSide>
							<ImportData/>
						</LeftSide>
					</PrivateRoute>
				}/>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
