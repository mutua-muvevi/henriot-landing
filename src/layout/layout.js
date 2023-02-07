import { Outlet } from 'react-router-dom';

import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';

import Footer from './footer';
import Navbar from './navbar';

const StyledMain = styled(Box)(({ theme }) => ({

}))

const Layout = () => {
	return (
		<Stack direction="column">
			<Navbar/>
			<StyledMain>
				<Outlet/>
			</StyledMain>
			<Footer/>
		</Stack>
	)
}

export default Layout