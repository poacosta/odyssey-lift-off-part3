import React from "react";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";

const Track = () => {
    const { trackId = "" } = useParams();
    return <Layout></Layout>;
};

export const GET_TRACK = gql(`
  query GetTrack($trackId: ID!) {
      track(id: $trackId) {
        id
        title
        author {
          id
          name
          photo
        }
        thumbnail
        length
        modulesCount
        numberOfViews
        modules {
          id
          title
          length
        }
        description
      }
  }
)`);

export default Track;