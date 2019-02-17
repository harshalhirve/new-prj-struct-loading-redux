import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../../actions/postActions";
import Messages from "../../components/common/Messages";
import PostListContent from "../../components/posts/PostListContent";
import { MdAddCircle } from "react-icons/md";

class PostList extends Component {
  constructor() {
    super();
    this.getPostList = this.getPostList.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    this.getPostList();
  }

  componentWillUnmount() {
    this.props.clearAllPostMsgs();
    this.props.clearPostStates("list");
  }

  /*
  shouldComponentUpdate(nextProps) {
    if (this.props.postList !== nextProps.postList) {
      return true;
    }
    if (this.props.loading !== nextProps.loading) {
      return true;
    }
    return false;
  }
  */

  async getPostList() {
    await this.props.getPostList();
  }

  async deletePost(id) {
    await this.props.deletePost(id);
  }

  render() {
    const { loading, postList, sucMsg, errMsg } = this.props;
    return (
      <table
        border="0"
        cellPadding="0"
        cellSpacing="0"
        width="100%"
        align="center"
      >
        <tbody>
          <tr>
            <td>
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                align="center"
              >
                <tbody>
                  <tr>
                    <td align="right">
                      <Link to="/postForm">
                        <MdAddCircle />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <Messages loading={loading} sucMsg={sucMsg} errMsg={errMsg} />
                  <tr>
                    <td>
                      <PostListContent
                        loading={loading}
                        postList={postList}
                        deletePost={this.deletePost}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  //console.log(state.loading);
  return {
    ...state.posts,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Object.assign({}, postActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
