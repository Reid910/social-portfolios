from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, User, Project, Comment

app = Flask(__name__)
CORS(app)

# Config for SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/test')
def test():
    return "Test OK", 200

# --- USERS ---
@app.route('/users', methods=['GET', 'POST'])
def handle_users():
    if request.method == 'POST':
        data = request.get_json()
        existing_user = User.query.filter_by(username=data['username']).first()
        if existing_user:
            return jsonify({'error': 'Username already exists'}), 400

        new_user = User(username=data['username'])
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'id': new_user.id, 'username': new_user.username}), 201

    users = User.query.all()
    return jsonify([{'id': u.id, 'username': u.username} for u in users])

@app.route('/users/<int:user_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_user(user_id):
    user = User.query.get_or_404(user_id)

    if request.method == 'GET':
        return jsonify({'id': user.id, 'username': user.username})

    elif request.method == 'PUT':
        data = request.get_json()
        user.username = data['username']
        db.session.commit()
        return jsonify({'message': 'User updated'})

    elif request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return jsonify({'message': 'User deleted'})

# --- PROJECTS ---
@app.route('/projects', methods=['GET', 'POST'])
def handle_projects():
    if request.method == 'POST':
        data = request.get_json()
        new_proj = Project(
            title=data['title'],
            description=data.get('description', ''),
            user_id=data['user_id']
        )
        db.session.add(new_proj)
        db.session.commit()
        return jsonify({'id': new_proj.id})
    
    projects = Project.query.all()
    return jsonify([
        {
            'id': p.id,
            'title': p.title,
            'description': p.description,
            'user_id': p.user_id
        } for p in projects
    ])

@app.route('/projects/<int:project_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_project(project_id):
    project = Project.query.get_or_404(project_id)

    if request.method == 'GET':
        return jsonify({
            'id': project.id,
            'title': project.title,
            'description': project.description,
            'user_id': project.user_id
        })

    elif request.method == 'PUT':
        data = request.get_json()
        project.title = data['title']
        project.description = data.get('description', '')
        db.session.commit()
        return jsonify({'message': 'Project updated'})

    elif request.method == 'DELETE':
        db.session.delete(project)
        db.session.commit()
        return jsonify({'message': 'Project deleted'})

# --- COMMENTS ---
@app.route('/comments', methods=['GET', 'POST'])
def handle_comments():
    if request.method == 'POST':
        data = request.get_json()
        new_comment = Comment(
            content=data['content'],
            project_id=data['project_id'],
            user_id=data['user_id']
        )
        db.session.add(new_comment)
        db.session.commit()
        return jsonify({'id': new_comment.id})
    
    comments = Comment.query.all()
    return jsonify([
        {
            'id': c.id,
            'content': c.content,
            'project_id': c.project_id,
            'user_id': c.user_id
        } for c in comments
    ])

@app.route('/comments/<int:comment_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_comment(comment_id):
    comment = Comment.query.get_or_404(comment_id)

    if request.method == 'GET':
        return jsonify({
            'id': comment.id,
            'content': comment.content,
            'project_id': comment.project_id,
            'user_id': comment.user_id
        })

    elif request.method == 'PUT':
        data = request.get_json()
        comment.content = data['content']
        db.session.commit()
        return jsonify({'message': 'Comment updated'})

    elif request.method == 'DELETE':
        db.session.delete(comment)
        db.session.commit()
        return jsonify({'message': 'Comment deleted'})

if __name__ == '__main__':
    app.run(debug=True, port=5050)
