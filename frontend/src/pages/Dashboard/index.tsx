import React, { useState, useEffect, Fragment } from "react";
import "antd/dist/antd.css";
import { Table, Upload, message, Button, Layout } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import api from "../../services/api";

const { Content } = Layout;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Tamanho",
    dataIndex: "size",
  },
  {
    title: "key",
    dataIndex: "key",
  },
  {
    title: "Caminho",
    dataIndex: "path",
  },
  {
    title: "Data de Upload",
    dataIndex: "createdAt",
  },
];

const { progress, name, action, headers } = {
  name: "file",
  action: "http://3.129.57.240:3001/posts",
  headers: {
    authorization: "authorization-text",
  },
  progress: {
    strokeColor: {
      "0%": "#108ee9",
      "100%": "#87d068",
    },
    strokeWidth: 3,
  },
};

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get("posts").then((response) => {
      setRepositories(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <Layout>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div style={{ marginBottom: 16 }}>
              <Upload
                name={name}
                action={action}
                headers={headers}
                progress={progress}
                onChange={(info) => {
                  if (info.file.status !== "uploading") {
                    console.log(info.file, info.fileList);
                  }
                  if (info.file.status === "done") {
                    message.success(
                      `${info.file.name} file uploaded successfully`
                    );
                    const files = info.file.response;

                    api.get("posts").then((response) => {
                      setRepositories(response.data);
                    });
                  } else if (info.file.status === "error") {
                    message.error(`${info.file.name} file upload failed.`);
                  }
                }}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Table
                columns={columns}
                dataSource={repositories}
                onChange={() => {
                  console.log("tese");
                }}
              />
            </div>
          </Content>
        </Layout>
      </div>
    </>
  );
};

export default Dashboard;
