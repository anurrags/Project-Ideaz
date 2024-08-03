import { OptionType } from "../interfaces";

export const WebTechnologies: OptionType[] = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "bootstrap", label: "Bootstrap" },
  { value: "jquery", label: "jQuery" },
  { value: "sass", label: "Sass" },
  { value: "less", label: "Less" },
  { value: "styled-components", label: "Styled Components" },
  { value: "material-ui", label: "Material UI" },
  { value: "ant-design", label: "Ant Design" },
  { value: "chakra-ui", label: "Chakra UI" },
  { value: "react-bootstrap", label: "React Bootstrap" },
  { value: "semantic-ui", label: "Semantic UI" },
  { value: "foundation", label: "Foundation" },
  { value: "bulma", label: "Bulma" },
  { value: "mui", label: "MUI" },
  { value: "tailwindcss", label: "TailwindCSS" },
  { value: "styled-components", label: "Styled Components" },
  { value: "emotion", label: "Emotion" },
  { value: "styled-jsx", label: "Styled JSX" },
  { value: "styled-system", label: "Styled System" },
  { value: "styled-tools", label: "Styled Tools" },
];

export const FrontendFrameworks: OptionType[] = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "next", label: "Next" },
  { value: "nuxt", label: "Nuxt" },
  { value: "gastby", label: "Gatsby" },
];

export const BackendFrameworks: OptionType[] = [
  { value: "express", label: "Express" },
  { value: "koa", label: "Koa" },
  { value: "hapi", label: "Hapi" },
  { value: "nest", label: "Nest" },
  { value: "fastify", label: "Fastify" },
  { value: "feathers", label: "Feathers" },
  { value: "loopback", label: "Loopback" },
  { value: "strapi", label: "Strapi" },
  { value: "adonis", label: "Adonis" },
  { value: "sails", label: "Sails" },
  { value: "meteor", label: "Meteor" },
  { value: "django", label: "Django" },
  { value: "flask", label: "Flask" },
  { value: "rails", label: "Rails" },
  { value: "laravel", label: "Laravel" },
  { value: "spring", label: "Spring" },
  { value: "spring-boot", label: "Spring Boot" },
];

export const RuntimeEnvironments: OptionType[] = [
  { value: "node", label: "Node.js" },
  { value: "deno", label: "Deno" },
  { value: "jvm", label: "Java Virtual Machine" },
  { value: "clr", label: "CLR" },
  { value: "python", label: "Python" },
  { value: "ruby", label: "Ruby" },
  { value: "php", label: "PHP" },
];

export const Database: OptionType[] = [
  { value: "mysql", label: "MySQL" },
  { value: "mariadb", label: "MariaDB" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "sqlite", label: "SQLite" },
  { value: "mongodb", label: "MongoDB" },
  { value: "cassandra", label: "Cassandra" },
  { value: "couchdb", label: "CouchDB" },
  { value: "redis", label: "Redis" },
  { value: "firebase", label: "Firebase" },
  { value: "dynamodb", label: "DynamoDB" },
  { value: "cosmosdb", label: "CosmosDB" },
  { value: "couchbase", label: "Couchbase" },
  { value: "neo4j", label: "Neo4j" },
  { value: "orientdb", label: "OrientDB" },
  { value: "arangodb", label: "ArangoDB" },
  { value: "faunadb", label: "FaunaDB" },
  { value: "realm", label: "Realm" },
  { value: "sqllite", label: "SQLite" },
  { value: "sqlserver", label: "SQL Server" },
  { value: "oracle", label: "Oracle" },
  { value: "db2", label: "DB2" },
  { value: "couchbase", label: "Couchbase Database" },
];

export const Languages: OptionType[] = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "ruby", label: "Ruby" },
  { value: "php", label: "PHP" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "kotlin", label: "Kotlin" },
  { value: "swift", label: "Swift" },
  { value: "dart", label: "Dart" },
  { value: "scala", label: "Scala" },
  { value: "perl", label: "Perl" },
  { value: "r", label: "R" },
  { value: "elixir", label: "Elixir" },
  { value: "clojure", label: "Clojure" },
  { value: "haskell", label: "Haskell" },
  { value: "lua", label: "Lua" },
];

export const AIML: OptionType[] = [
  { value: "tensorflow", label: "TensorFlow" },
  { value: "keras", label: "Keras" },
  { value: "pytorch", label: "PyTorch" },
  { value: "scikit-learn", label: "Scikit-learn" },
  { value: "caffe", label: "Caffe" },
  { value: "theano", label: "Theano" },
  { value: "torch", label: "Torch" },
  { value: "mxnet", label: "MXNet" },
  { value: "deeplearning4j", label: "Deeplearning4j" },
  { value: "paddlepaddle", label: "PaddlePaddle" },
  { value: "h2o", label: "H2O" },
  { value: "rapidminer", label: "RapidMiner" },
  { value: "weka", label: "Weka" },
  { value: "knime", label: "KNIME" },
  { value: "orange", label: "Orange" },
  {
    value: "microsoft-cognitive-toolkit",
    label: "Microsoft Cognitive Toolkit",
  },
  { value: "accord-framework", label: "Accord.NET Framework" },
  { value: "ml.net", label: "ML.NET" },
  { value: "shogun", label: "Shogun" },
  { value: "mahout", label: "Mahout" },
  { value: "spark-ml", label: "Spark ML" },
];

export const MessagingQueues: OptionType[] = [
  { value: "rabbitmq", label: "RabbitMQ" },
  { value: "kafka", label: "Kafka" },
  { value: "active-mq", label: "ActiveMQ" },
  { value: "amazon-sqs", label: "Amazon SQS" },
  { value: "azure-service-bus", label: "Azure Service Bus" },
  { value: "nats", label: "NATS" },
  { value: "redis-streams", label: "Redis Streams" },
  { value: "pulsar", label: "Apache Pulsar" },
  { value: "zeromq", label: "ZeroMQ" },
  { value: "nsq", label: "NSQ" },
  { value: "google-cloud-pubsub", label: "Google Cloud Pub/Sub" },
  { value: "solace", label: "Solace" },
  { value: "ibmmq", label: "IBM MQ" },
];

export const DevOps: OptionType[] = [
  { value: "docker", label: "Docker" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "jenkins", label: "Jenkins" },
  { value: "ansible", label: "Ansible" },
  { value: "vagrant", label: "Vagrant" },
  { value: "terraform", label: "Terraform" },
  { value: "puppet", label: "Puppet" },
  { value: "chef", label: "Chef" },
  { value: "saltstack", label: "SaltStack" },
  { value: "gitlab-ci", label: "GitLab CI" },
  { value: "circle-ci", label: "Circle CI" },
  { value: "travis-ci", label: "Travis CI" },
  { value: "github-actions", label: "GitHub Actions" },
  { value: "bitbucket-pipelines", label: "Bitbucket Pipelines" },
  { value: "teamcity", label: "TeamCity" },
  { value: "bamboo", label: "Bamboo" },
  { value: "octopus-deploy", label: "Octopus Deploy" },
  { value: "spinnaker", label: "Spinnaker" },
  { value: "argo-cd", label: "Argo CD" },
  { value: "flux-cd", label: "Flux CD" },
  { value: "helm", label: "Helm" },
  { value: "kustomize", label: "Kustomize" },
  { value: "skaffold", label: "Skaffold" },
  { value: "istio", label: "Istio" },
  { value: "linkerd", label: "Linkerd" },
  { value: "consul", label: "Consul" },
  { value: "vault", label: "Vault" },
  { value: "prometheus", label: "Prometheus" },
  { value: "grafana", label: "Grafana" },
  { value: "loki", label: "Loki" },
  { value: "jaeger", label: "Jaeger" },
  { value: "zipkin", label: "Zipkin" },
  { value: "new-relic", label: "New Relic" },
];

export const ProjectLevel: OptionType[] = [
  { value: "beginners", label: "Beginners" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "all", label: "All" },
];

export const Audience: OptionType[] = [
  { value: "student", label: "Student" },
  { value: "developer", label: "Developer" },
  { value: "research", label: "Research" },
  { value: "customer", label: "Customer" },
  { value: "government", label: "Government" },
];

export const dropdownOptions = {
  "Web Tech": WebTechnologies,
  Frontend: FrontendFrameworks,
  Backend: BackendFrameworks,
  Runtime: RuntimeEnvironments,
  Database: Database,
  Language: Languages,
  "AI/ML": AIML,
  Messaging: MessagingQueues,
  Devops: DevOps,
  "Project Level": ProjectLevel,
  Audience: Audience,
};