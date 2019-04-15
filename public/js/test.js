<h3>Your last package included:</h3>
<ul id="post-list" class="list-group">
  {{#each posts}}
  <li data-id="{{this.id}}" class="list-group-item">
    <a href="post/{{this.id}}">{{this.text}}</a>
  </li>
  {{/each}}
</ul>