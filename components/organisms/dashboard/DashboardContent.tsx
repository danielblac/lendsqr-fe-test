"use client";
import { FaCoins, FaRegEye, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { HiOutlineUsers, HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsFilter } from "react-icons/bs";
import { MdOutlineRequestQuote } from "react-icons/md";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { users } from "@/lib/extensions/data/Users";
import { useState } from "react";
import Date from "@/components/atoms/Date";
import { useRouter } from "next/navigation";
import useIsClickOut from "@/components/atoms/useClickOut";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { setPageNumber } from "@/app/redux/features/tablePageSlice";
import AdvancedFilters from "@/components/molecules/AdvancedFilters";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function DashboardContent() {
  // DECLARATIONS
  const router = useRouter();
  const page: number = useAppSelector((state) => state.pageNumber.page);
  const dispatch = useAppDispatch();

  // STATES
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filters, setFilters] = useState(false);
  const [options, setOptions] = useState(false);
  const [activeOptions, setActiveOptions] = useState("");
  const [eleCallBack] = useIsClickOut(setOptions);

  // FUNCTIONS
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    dispatch(setPageNumber(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    dispatch(setPageNumber(0));
  };
  return (
    <div className="users-page">
      <h2>Users</h2>
      <div className="users-general-container">
        <div className="users-general">
          <div className="users-general-icon first">
            <HiOutlineUsers />
          </div>
          <p className="users-p">USERS</p>
          <p className="users-number">2,453</p>
        </div>
        <div className="users-general">
          <div className="users-general-icon second">
            <HiOutlineUserGroup />
          </div>
          <p className="users-p">ACTIVE USERS</p>
          <p className="users-number">2,453</p>
        </div>
        <div className="users-general">
          <div className="users-general-icon third">
            <MdOutlineRequestQuote />
          </div>
          <p className="users-p">USERS WITH LOANS</p>
          <p className="users-number">12,453</p>
        </div>
        <div className="users-general">
          <div className="users-general-icon fourth">
            <FaCoins />
          </div>
          <p className="users-p">USERS WITH SAVINGS</p>
          <p className="users-number">102,453</p>
        </div>
      </div>
      <div className="users-details-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <div className="users-details-header">
                    <p>ORGANIZATION</p>
                    <BsFilter
                      className="icon"
                      onClick={() => setFilters(!filters)}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="users-details-header">
                    <p className="">USERNAME</p>
                    <BsFilter
                      className="icon"
                      onClick={() => setFilters(!filters)}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="users-details-header">
                    <p className="">EMAIL</p>
                    <BsFilter
                      className="icon"
                      onClick={() => setFilters(!filters)}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="users-details-header">
                    <p className="">PHONE</p>
                    <BsFilter
                      className="icon"
                      onClick={() => setFilters(!filters)}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="users-details-header">
                    <p className="">DATE JOINED</p>
                    <BsFilter
                      className="icon"
                      onClick={() => setFilters(!filters)}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="users-details-header">
                    <p className="">STATUS</p>
                    <BsFilter
                      className="icon"
                      onClick={() => setFilters(!filters)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? users.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : users
              ).map((user) => (
                <TableRow key={user._id}>
                  <TableCell component="th" scope="row">
                    <p className="user-details-body">Lendsqr</p>
                  </TableCell>
                  <TableCell>
                    <p className="user-details-body">{user.userName}</p>
                  </TableCell>
                  <TableCell>
                    <p className="user-details-body">{user.email}</p>
                  </TableCell>
                  <TableCell>
                    <p className="user-details-body">{`0${user.phone}`}</p>
                  </TableCell>
                  <TableCell>
                    <div className="user-details-body">
                      <Date dateString={user.registered.slice(0, -7)} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div
                      className={
                        user.status === "active"
                          ? "active"
                          : user.status === "inactive"
                          ? "inactive"
                          : user.status === "pending"
                          ? "pending"
                          : "blacklisted"
                      }
                    >
                      <p>{user.status}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div
                      className="user-options"
                      onClick={() => {
                        setActiveOptions(user._id);
                        setOptions(true);
                      }}
                    >
                      <HiOutlineDotsVertical
                        className="user-details-body"
                        size={18}
                      />
                      {options && activeOptions === user._id && (
                        <div className="options" ref={eleCallBack}>
                          <div
                            onClick={() => {
                              router.push(`/users/${user._id}`);
                              setOptions(false);
                            }}
                            className="option"
                          >
                            <FaRegEye />
                            <p>View Details</p>
                          </div>
                          <div
                            className="option"
                            onMouseDown={() => setOptions(false)}
                          >
                            <FaUserMinus />
                            <p>Blacklist User</p>
                          </div>
                          <div
                            onMouseDown={() => setOptions(false)}
                            className="option"
                          >
                            <FaUserPlus />
                            <p>Activate User</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[
                    10,
                    15,
                    25,
                    50,
                    100,
                    { label: "All", value: -1 },
                  ]}
                  count={users.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  slotProps={{
                    select: {
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        {filters && <AdvancedFilters />}
      </div>
    </div>
  );
}
