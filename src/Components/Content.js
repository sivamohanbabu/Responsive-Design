import * as React from "react";
import Pagination from "@mui/material/Pagination";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import "./Content.css";
import { Grid } from "@mui/material";
import Filterlist from "./Filterlist";
import Videocontent from "./Videocontent";

function Content() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="x-lg" sx={{ background: "black" }}>
        <div>
          <div typeof="button" className="button">
            New article
          </div>
          <div typeof="button" className="button">
            New article
          </div>
          <div typeof="button" className="button">
            New article
          </div>
          <div typeof="button" className="button">
            New article
          </div>
          <div typeof="button" className="button">
            New article
          </div>
        </div>
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item xs={12} md={4}>
              <Filterlist />
            </Grid>
            <Grid item xs={12} md={4}>
              <Videocontent />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <div className="page">
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          sx={{ marginleft: "20px" }}
        />
      </div>
    </React.Fragment>
  );
}

export default Content;
