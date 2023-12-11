<?php 

namespace App\Controllers;

use App\Models\UserModel;
use CodeIgniter\RESTful\ResourceController;

//create
class LoginController extends ResourceController
{
    protected $format = 'json';

    public function index()
    {
        $model = new UserModel();
        $data = $model->findAll();

        if (!empty($data)) {
            $response = [
                'status' => 'success',
                'message' => 'Data retrieved successfully',
                'data' => $data
            ];
        } else {
            $response =[
                'status' => 'error',
                'message' => 'Not data found',
                'data' => []
            ];
        }
        return $this->respond($response);
    }

    public function register()
    {
        $rules = [
            'email' => ['rules' => 'required|min_length[1]|max_length[255]|valid_email|is_unique[users.email]'],
            'phone' => ['rules' => 'required'],
            'name' => ['rules' => 'required'],
            'password' => ['rules' => 'required'],
            'dob' => ['rules' => 'required'],

        ];


        if ($this->validate($rules)) {
            $model = new UserModel();
            $data = [
                'email'    => $this->request->getVar('email'),
                'phone'    => $this->request->getVar('phone'),
                'dob'    => $this->request->getVar('dob'),
                'name'    => $this->request->getVar('name'),
                'password' => password_hash($this->request->getVar('password'), PASSWORD_DEFAULT)
            ];
            $model->save($data);

            return $this->respond(['message' => 'Registered Successfully'], 200);
        } else {
            $response = [
                'errors' => $this->validator->getErrors(),
                'message' => 'Invalid Inputs'
            ];
            return $this->fail($response, 409);
        }

    }

    //Edit
    public function update($id = null)
    {
        $userModel = new \App\Models\UserModel();
        $user = $userModel->find($id);
        if ($user) {
            $data = [
                'id' => $id,
                'name' => $this->request->getVar('name'),
                'email' => $this->request->getVar('email'),
                'phone' => $this->request->getVar('phone'),
                'dob' => $this->request->getVar('dob'),
                'password' => password_hash($this->request->getVar('password'), PASSWORD_DEFAULT)

            ];
            $proses = $userModel->save($data);
            if ($proses) {
                $response = [
                    'status' => 200,
                    'messages' => 'Data berhasil diubah',
                    'data' => $data
                ];
            } else {
                $response = [
                    'status' => 402,
                    'messages' => 'Gagal diubah',
                ];
            }
            return $this->respond($response);
        }
        return $this->failNotFound('Data tidak ditemukan');
    }

    // function untuk menghapus data
    public function delete($id = null)
    {
        $userModel = new \App\Models\UserModel();
        $user = $userModel->find($id);
        if ($user) {
            $proses = $userModel->delete($id);
            if ($proses) {
                $response = [
                    'status' => 200,
                    'messages' => 'Data berhasil dihapus',
                ];
            } else {
                $response = [
                    'status' => 402,
                    'messages' => 'Gagal menghapus data',
                ];
            }
            return $this->respond($response);
        } else {
            return $this->failNotFound('Data tidak ditemukan');
        }
    }
 
}